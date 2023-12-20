import { PrismaClient } from "@prisma/client";
import { exec } from "node:child_process";

type QueryData = {
  ok: true,
  rows: Record<string, any>[]
};

type QueryError = {
  ok: false,
  message: string
};

type QueryResult = QueryData | QueryError;

class Connection {
  private prisma = new PrismaClient();

  async connect() {
    try {
      await this.prisma.$connect();
      console.log("==> [SERVER]: Connection made successfully to the db!");
    } catch (err) {
      console.error(`==> [SERVER]: ${err}`);
    }
  }

  async show_tables(): Promise<QueryResult> {
    try {
      const res: Record<string, any>[] = await this.prisma.$queryRaw`SELECT pg_tables.tablename FROM pg_catalog.pg_tables WHERE schemaname != 'information_schema' AND schemaname != 'pg_catalog'`;

      return {
        ok: true,
        rows: res
      }
    } catch (err) {
      console.error(`==> [SERVER]: ${err}`)
      return {
        ok: false,
        message: "Error fetching all tables from db"
      }
    }
  }

  async migrate_db_from_sheets() {
    console.log("==> [SERVER]: Starting migration...");
    const suffix = "/gviz/tq?tqx=out:csv&sheet=";

    const sheet_urls = {
      catCLIENTES: "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0",
      catCDC: "https://docs.google.com/spreadsheets/d/1f1l2OFLYFqWNcy084IiATyquMH7v2nnRx3lKfE8QAH0"
    }

    for (const [sheet, url] of Object.entries(sheet_urls)) {
      try {
        const blob = await (await fetch(`${url}${suffix}${sheet}`)).blob();
        await Bun.write(`./server/files/${sheet}.csv`, blob);

        const csv_path = Bun.resolveSync(`../files/${sheet}.csv`, Bun.main);
        const prompt = `\\copy "${sheet}" FROM '${csv_path}' DELIMITER ',' CSV HEADER;`;
        const { stdout, stderr } = Bun.spawn(["psql", "thp_db", "-c", prompt]);

        const out = await new Response(stdout).text();
        const err = await new Response(stderr).text();

        console.log("STDOUT:", out, ", STDERR:", err);
      } catch (err) {
        console.error(`==> [SERVER]: Error while creating ${sheet} table`);
      }
    }
    console.log("==> [SERVER]: Migration finished!");
  }
}

export const db_connection = new Connection();
await db_connection.migrate_db_from_sheets();
