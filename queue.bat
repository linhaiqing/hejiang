@echo off

cd %~dp0
set PROJECT_PATH=%~dp0
set KEYWORD="%PROJECT_PATH%yii" queue/listen

rem @echo %KEYWORD%

@echo ���ڼ�����...
wmic process where name="php.exe" get CommandLine /value | findstr "%KEYWORD%" >nul
if %errorlevel% equ 0 (
goto end
) else (
goto start
)

:start
@echo ������������...
start /b yii queue/listen 1
@echo ����������������رձ����ڣ�
goto end

:end
