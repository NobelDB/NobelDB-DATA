#!/usr/bin/env node
/*!
 * -------------
 * NobelDB®-Data
 * -------------
 * Data of NobelDB — A manually curated dedicated database of Nobel Laureates.
 * ___________________________________________________________________________
 *
 * Grunt, http://gruntjs.com/ — The JavaScript Task Runner.
 * ___________________________________________________________________________
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ___________________________________________________________________________
 *
 * @date      : 28-Nov-2016
 * @license   : Apache, version 2.0
 * @require   : Node.js®
 * @require   : NPM
 * @require   : grunt-cli
 * @build     : SEED™ — Umeå
 *              └────── A Sequømics Product — http://sequomics.com/.
 * ___________________________________________________________________________
 *
 * --/The Heart of Build System/-- of "NobelDB®-Data".
 * ___________________________________________________________________________
 */


// # Usage: $ node -v
// # Usage: $ npm -v
// # Usage: $ grunt -version

// Invoking strict mode.
// @purpose: Strict mode applies to entire scripts or to individual functions.
"use strict";

// To load required NPM modules.
// -----------------------------
var chalk    = require('chalk');
var glob     = require('glob');

// Default color defined.
// ----------------------
var noop     = chalk.red;
var yeep     = chalk.green;
var okay     = chalk.blue;

// ----------------------------------------------------------------------------------------------------------
// All Grunt Operations Defined... |--------------------------------------------| 28/Nov/2016 | SEED™ — Umeå.
//                           Copyright © 2016, Prabhat Kumar, All rights reserved.
// ----------------------------------------------------------------------------------------------------------

module.exports = function(grunt) {
  
  // Force use of Unix newlines.
  grunt.util.linefeed = '\n';
  
  // 1. time-grunt ——> $ npm install time-grunt --save-dev
  // -----------------------------------------------------
  // Display the elapsed execution time of grunt tasks.
  require('time-grunt')(grunt);
  
  // Utility to load the different option files,
  // based on their names.
  function loadConfig(path) {
    var object = {};
    var key;
    
    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });
    return object;
  }
  
  ///-------------------
  // An object literals.
  ///-------------------
  var build = {
    // Nonidentifier property names are quoted.
    "system"    : "SEED™",
    "name"      : "Umeå",
    "year"      : "2016",
    "audience"  : "for all scientist."
  };
  
  /// Initial Configurations.
  var config = {
    pkg: grunt.file.readJSON('./package.json')
  };
  
  /// Loading Externally-Defined Tasks.
  grunt.loadTasks('tasks');
  
  /// Loading all the tasks options in tasks/options base on the name:
  /// publish.js => publish{}
  grunt.util._.extend(config, loadConfig('./tasks/options/'));
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Project configuration for -//NobelDB®-Data//- Build.
  // Date: 28-11-2016.
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  grunt.initConfig(config);
  
  // 2. load-grunt-tasks ——> $ npm install load-grunt-tasks --save-dev
  // -----------------------------------------------------------------
  // Load multiple grunt tasks using globbing patterns.
  require('load-grunt-tasks')(grunt, {
    scope: ['devDependencies', 'dependencies']
  });
