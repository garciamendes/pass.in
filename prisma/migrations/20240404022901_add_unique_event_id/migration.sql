/*
  Warnings:

  - A unique constraint covering the columns `[event_uid]` on the table `Attendee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Attendee_event_uid_key" ON "Attendee"("event_uid");
