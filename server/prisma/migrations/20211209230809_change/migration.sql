-- AlterTable
ALTER TABLE "User" ALTER COLUMN "followers" DROP NOT NULL,
ALTER COLUMN "following" DROP NOT NULL,
ALTER COLUMN "html_url" DROP NOT NULL,
ALTER COLUMN "public_gists" DROP NOT NULL,
ALTER COLUMN "public_repos" DROP NOT NULL;
