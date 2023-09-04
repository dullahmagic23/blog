-- CreateIndex
CREATE INDEX "Comment_userId_postId_idx" ON "Comment"("userId", "postId");

-- CreateIndex
CREATE INDEX "Post_authorId_idx" ON "Post"("authorId");
