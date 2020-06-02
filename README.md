## setup opencv

### windows

1. Download and install OpenCV (Be sure to use a 2.4 version) @ http://opencv.org/releases.html For these instructions we will assume OpenCV is put at C:\OpenCV, but you can adjust accordingly.

2. If you haven't already, create a system variable called OPENCV_DIR and set it to C:\OpenCV\build\x64\vc12

3. Make sure the "x64" part matches the version of NodeJS you are using.

4. Also add the following to your system PATH ;%OPENCV_DIR%\bin

5. Install Visual Studio 2013. Make sure to get the C++ components. You can use a different edition, just make sure OpenCV supports it, and you set the "vcxx" part of the variables above to match.

6. Download peterbraden/node-opencv fork git clone https://github.com/peterbraden/node-opencv

7. `run npm install`

8. `npm install opencv`

If you do not want to use opencv, you can just use puppeteer and cherrio to get the information that way.

## npm script commands

    "test": "mocha test\\test.js" -> run mocha tests
    
    "startDev": "node src\\app.js", -> run unminified app.js
    
    "prodRun": "node dist\\app.js", -> run minified app.js (perform minify command first)
    
    "minify": "gulp" -> minifies app.js and generates the `dist` folder.

      - also perform this `npm install -g gulp-cli gulp gulp-babel mocha chai` to make sure the above commands work.

      - also perform install locally `npm install --save-dev @babel/core babel mocha chai gulp`