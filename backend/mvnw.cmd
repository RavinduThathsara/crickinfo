@REM Maven Wrapper startup script for Windows
@REM This allows running Maven without having it installed

@echo off
set MAVEN_PROJECTBASEDIR=%~dp0
set MAVEN_OPTS=%MAVEN_OPTS% -Xmx512m

if not exist "%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar" (
    echo Error: maven-wrapper.jar not found
    echo Please run: mvn -N io.takari:maven:wrapper
    exit /b 1
)

"%JAVA_HOME%\bin\java.exe" ^
  %MAVEN_OPTS% ^
  -classpath "%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar" ^
  "-Dmaven.multiModuleProjectDirectory=%MAVEN_PROJECTBASEDIR%" ^
  org.apache.maven.wrapper.MavenWrapperMain %*
