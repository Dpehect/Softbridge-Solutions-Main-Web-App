@echo off
if exist middleware.ts del /f /q middleware.ts
if exist .next rmdir /s /q .next
echo Old middleware and Next.js cache removed.
