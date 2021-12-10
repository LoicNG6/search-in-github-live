/*
  Warnings:

  - Added the required column `created_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `followers` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `following` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `html_url` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_gists` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_repos` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "blog" TEXT,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "followers" INTEGER NOT NULL,
ADD COLUMN     "following" INTEGER NOT NULL,
ADD COLUMN     "hireable" BOOLEAN,
ADD COLUMN     "html_url" TEXT NOT NULL,
ADD COLUMN     "location" TEXT,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "public_gists" INTEGER NOT NULL,
ADD COLUMN     "public_repos" INTEGER NOT NULL,
ADD COLUMN     "twitter_username" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);
