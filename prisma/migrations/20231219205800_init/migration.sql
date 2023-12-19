-- CreateEnum
CREATE TYPE "tCuenta" AS ENUM ('INGRESO', 'EGRESO');

-- CreateTable
CREATE TABLE "catCLIENTES" (
    "idCliente" TEXT NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Contacto" TEXT,
    "DomCalle" TEXT,
    "DomNumExt" INTEGER,
    "DomNumInt" TEXT,
    "DomColonia" TEXT,
    "DomCp" INTEGER,
    "DomCiudad" TEXT,
    "DomEstado" TEXT,
    "Tel01" INTEGER,
    "Rfc" TEXT,
    "Tel02" TEXT,
    "Cel" INTEGER,
    "idTCliente" TEXT,
    "Descuento" INTEGER,
    "Plazo" INTEGER,

    CONSTRAINT "catCLIENTES_pkey" PRIMARY KEY ("idCliente")
);

-- CreateTable
CREATE TABLE "catCDC" (
    "idCuenta" TEXT NOT NULL,
    "NumCatCont" TEXT NOT NULL,
    "Cuenta" TEXT NOT NULL,
    "idTCuenta" "tCuenta" NOT NULL,
    "inPPTO" BOOLEAN NOT NULL,
    "inCCH" BOOLEAN NOT NULL,

    CONSTRAINT "catCDC_pkey" PRIMARY KEY ("idCuenta")
);

-- CreateTable
CREATE TABLE "catCM" (
    "idComision" TEXT NOT NULL,
    "Comision" TEXT NOT NULL,
    "idPatronal" INTEGER NOT NULL,
    "idTrabajadores" INTEGER NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL,
    "Vigencia" INTEGER NOT NULL,

    CONSTRAINT "catCM_pkey" PRIMARY KEY ("idComision")
);

-- CreateIndex
CREATE UNIQUE INDEX "catCLIENTES_idCliente_key" ON "catCLIENTES"("idCliente");

-- CreateIndex
CREATE UNIQUE INDEX "catCDC_idCuenta_key" ON "catCDC"("idCuenta");

-- CreateIndex
CREATE UNIQUE INDEX "catCM_idComision_key" ON "catCM"("idComision");
