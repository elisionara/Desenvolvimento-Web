-- CreateTable
CREATE TABLE "Point" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "pointReference" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "materials" TEXT[],

    CONSTRAINT "Point_pkey" PRIMARY KEY ("id")
);
