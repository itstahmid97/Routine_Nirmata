@echo off
chcp 65001 >nul
setlocal
title Routine Nirmata - Next.js
cd /d "%~dp0"

echo ================================================================
echo   ROUTINE NIRMATA - RDALSC BOGURA
echo   Next.js browser-storage edition
echo ================================================================
echo.

netstat -ano | findstr /R /C:":3000 .*LISTENING" >nul 2>nul
if %errorlevel% equ 0 (
    echo [i] Routine Nirmata is already running on port 3000.
    start "" http://localhost:3000
    exit /b 0
)

set "NODE_EXE=node"
if exist "bin\node.exe" set "NODE_EXE=%~dp0bin\node.exe"
"%NODE_EXE%" -e "const [major,minor]=process.versions.node.split('.').map(Number); if(major<20||(major===20&&minor<9)){console.error('Node.js 20.9 or newer is required.');process.exit(1)}" >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js 20.9 or newer is required.
    echo Download Node.js from https://nodejs.org/ and run this file again.
    pause
    exit /b 1
)

if not exist "node_modules\next\package.json" (
    echo [*] Installing app packages. Please wait...
    where npm >nul 2>nul
    if errorlevel 1 (
        echo [ERROR] npm was not found. Install Node.js 20.9 or newer first.
        pause
        exit /b 1
    )
    call npm install --no-audit --no-fund
    if errorlevel 1 (
        echo [ERROR] Package installation failed.
        pause
        exit /b 1
    )
)

start "" /min cmd /c "timeout /t 6 /nobreak >nul & start http://localhost:3000"
echo [*] Starting the Next.js app at http://localhost:3000
echo [i] Keep this window open while using the app.
echo.
"%NODE_EXE%" node_modules\next\dist\bin\next dev --hostname 0.0.0.0
if errorlevel 1 (
    echo.
    echo [ERROR] The app stopped with exit code %errorlevel%.
    pause
)
