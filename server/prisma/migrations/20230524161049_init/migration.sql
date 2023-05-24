-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "customers";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "drivers";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "routes";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "shipments";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "trucks";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "users";

-- CreateEnum
CREATE TYPE "users"."Role" AS ENUM ('ADM', 'CUSTOMER', 'DRIVER');

-- CreateTable
CREATE TABLE "users"."users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "users"."Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drivers"."drivers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cnh" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers"."customers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trucks"."trucks" (
    "id" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "capacity" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "fabricationYear" TEXT NOT NULL,
    "truckModel" TEXT NOT NULL,

    CONSTRAINT "trucks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipments"."shipments" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "truckId" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "shipments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes"."routes" (
    "id" TEXT NOT NULL,
    "shipmentId" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destiny" TEXT NOT NULL,
    "estimated_time" TEXT NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_userId_key" ON "drivers"."drivers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "drivers_cnh_key" ON "drivers"."drivers"("cnh");

-- CreateIndex
CREATE UNIQUE INDEX "customers_userId_key" ON "customers"."customers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_cnpj_key" ON "customers"."customers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_driverId_key" ON "trucks"."trucks"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_capacity_key" ON "trucks"."trucks"("capacity");

-- CreateIndex
CREATE UNIQUE INDEX "trucks_plate_key" ON "trucks"."trucks"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "shipments_truckId_key" ON "shipments"."shipments"("truckId");

-- AddForeignKey
ALTER TABLE "drivers"."drivers" ADD CONSTRAINT "drivers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers"."customers" ADD CONSTRAINT "customers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trucks"."trucks" ADD CONSTRAINT "trucks_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers"."drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments"."shipments" ADD CONSTRAINT "shipments_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"."customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shipments"."shipments" ADD CONSTRAINT "shipments_truckId_fkey" FOREIGN KEY ("truckId") REFERENCES "trucks"."trucks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "routes"."routes" ADD CONSTRAINT "routes_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "shipments"."shipments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
