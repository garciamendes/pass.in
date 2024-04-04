-- CreateTable
CREATE TABLE "Attendee" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_uid" TEXT NOT NULL,
    CONSTRAINT "Attendee_event_uid_fkey" FOREIGN KEY ("event_uid") REFERENCES "Event" ("uid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Attendee_email_key" ON "Attendee"("email");
