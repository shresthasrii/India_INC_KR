@echo off
title Push KR to GitHub
color 0A

echo ===================================================================
echo   PUSHING KERLA TO GITHUB
echo   Repository: https://github.com/shresthasrii/India_INC_KR.git
echo ===================================================================
echo.

cd /d "%~dp0"

echo [INFO] Running: git push -u origin main
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ===================================================================
    echo [SUCCESS] Successfully pushed Kerla to GitHub!
    echo URL: https://github.com/shresthasrii/India_INC_KR
    echo ===================================================================
) else (
    echo.
    echo ===================================================================
    echo [NOTE] If a GitHub sign-in window or prompt appeared, please sign in
    echo with your GitHub account (shresthasrii) or provide your Personal
    echo Access Token (PAT).
    echo ===================================================================
)

echo.
pause
