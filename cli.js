#!/usr/bin/env node
'use strict'

var pkg = require('./package')
var wifiTriangulate = require('./')
var argv = process.argv.slice(2)

var help = function () {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Example',
    '    wifi-triangulate',
    '    => {',
    '         "lat": 38.0690894,',
    '         "lng": -122.8069356,',
    '         "accuracy": 42',
    '       }'
  ].join('\n'))
}

if (argv.indexOf('--help') !== -1) {
  help()
  process.exit(0)
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

wifiTriangulate(function (err, location) {
  if (err) {
    console.error('ERROR:', err.message)
    process.exit(1)
  }

  console.log(JSON.stringify(location, null, 4))
})
