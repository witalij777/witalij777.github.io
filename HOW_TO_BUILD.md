git clone https://PLMABAJ@mobileappsourcecode.abb.com/scm/visit_plcrc/ionic.git
npm install
ionic cordova platform add android
gulp
cordova build android --release
"C:\Program Files\Java\jdk1.8.0_161\bin\jarsigner" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore visit-plcrc-key.keystore platforms\android\build\outputs\apk\android-release-unsigned.apk visit_plcrc
C:\Users\PLMABAJ\AppData\Local\Android\Sdk\build-tools\27.0.3\zipalign.exe -v 4 "platforms\android\build\outputs\apk\android-release-unsigned.apk" VisitPlcrc.apk