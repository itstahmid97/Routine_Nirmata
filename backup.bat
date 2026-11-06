@echo off
setlocal enabledelayedexpansion
title Routine Backup - RDALSC Bogura

cd /d "%~dp0"

echo ===================================================================
echo   ROUTINE NIRMATA - RDALSC BOGURA
echo   Database Backup Utility
echo ===================================================================
echo.

set "NODE_EXE="

if exist "%~dp0bin\node.exe" (
    set "NODE_EXE=%~dp0bin\node.exe"
) else (
    where node >nul 2>nul
    if %errorlevel% equ 0 set "NODE_EXE=node"
)

if not defined NODE_EXE (
    echo [ERROR] Node.js was not found. Please run "Start Application.bat" first.
    pause
    exit /b 1
)

"%NODE_EXE%" --no-warnings server\backup_cli.js
echo.
pause
