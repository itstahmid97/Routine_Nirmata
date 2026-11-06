@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion
title Stop Routine Nirmata

cd /d "%~dp0"

echo ===================================================================
echo   ROUTINE NIRMATA - RDALSC BOGURA
echo   Application Shutdown Helper
echo ===================================================================
echo.

set "FOUND=0"

for /f "tokens=5" %%a in ('netstat -ano ^| findstr /R /C:":3000 .*LISTENING"') do (
    set "SERVER_PID=%%a"
    if defined SERVER_PID (
        if !SERVER_PID! gtr 0 (
            echo [*] Stopping Routine Nirmata server process - PID: !SERVER_PID!...
            taskkill /F /T /PID !SERVER_PID! >nul 2>nul
            set "FOUND=1"
        )
    )
)

echo.
if "!FOUND!"=="1" (
    echo ===================================================================
    echo   [OK] Routine Nirmata has been stopped successfully!
    echo ===================================================================
) else (
    echo [i] Routine Nirmata is not currently running.
)

echo.
timeout /t 3 >nul 2>nul || ping -n 3 127.0.0.1 >nul
