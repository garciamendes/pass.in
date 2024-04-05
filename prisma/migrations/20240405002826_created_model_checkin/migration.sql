-- CreateTable
CREATE TABLE "CheckIn" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendee_uid" TEXT NOT NULL,
    CONSTRAINT "CheckIn_attendee_uid_fkey" FOREIGN KEY ("attendee_uid") REFERENCES "Attendee" ("uid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CheckIn_attendee_uid_key" ON "CheckIn"("attendee_uid");
