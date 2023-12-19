import { PrismaClient } from "@prisma/client";

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

  async make_backup_file() {
    // TODO: MAKE A BACKUP FILE OF THE ENTIRE POSTGRES DATABASE
  }

  async migrate_db_from_sheets() {
    // TODO: MIGRATE THE GOOGLE SHEETS DATABASE INTO A POSTGRES DATABASE
    // [1] Download the CSV files for all tables in the google sheets database
    // [2] Run create/truncate statements for all tables in the postgres database
    // [3] Run insert statements on every row coming from the csv files into it's corresponding table
    // [4] Log the rows per table inserted, date and migration file with timestamp backup
    // WARN: THIS IS AN UNSAFE FUNCTION
    // It deletes all the previous data in the database to produce a completely new version, do not run without backup
  }
}

export const db_connection = new Connection();
