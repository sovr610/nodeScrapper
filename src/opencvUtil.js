/* eslint-disable no-undef */
const cv = require('opencv')

opencvFuncs = {}

opencvFuncs.detectFaces = function (imgNameSrc, imgNameDest) {
  cv.readImage(imgName, function (err, im) {
    if (err) throw err
    if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size')

    im.detectObject('../data/haarcascade_frontalface_alt2.xml', {}, function (err, faces) {
      if (err) throw err

      for (var i = 0; i < faces.length; i++) {
        var face = faces[i]
        im.ellipse(face.x + face.width / 2, face.y + face.height / 2, face.width / 2, face.height / 2, [255, 255, 0], 3)
      }

      im.save(imgNameDest)
      console.log('Image saved.')
    })
  })
}

module.exports = opencvFuncs
