/*
  Warnings:

  - A unique constraint covering the columns `[email,event_uid]` on the table `Attendee` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Attendee_event_uid_key";

-- DropIndex
DROP INDEX "Attendee_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "Attendee_email_event_uid_key" ON "Attendee"("email", "event_uid");
