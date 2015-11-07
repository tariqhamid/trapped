'use strict';

module.exports = function (grunt) {
    var path = require('path'),
        helpers = require('amber-dev/lib/helpers');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('amber-dev');

    // Default task.
    grunt.registerTask('default', ['amdconfig:app', 'amberc:axon', 'amberc:all', 'amberc:counter', 'amberc:todo']);
    grunt.registerTask('test', ['amdconfig:app', 'requirejs:test_runner', 'execute:test_runner', 'clean:test_runner']);
    grunt.registerTask('devel', ['amdconfig:app', 'requirejs:devel']);
    grunt.registerTask('deploy', ['amdconfig:app', 'requirejs:deploy']);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        // pkg: grunt.file.readJSON(''),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // task configuration
        amberc: {
            options: {
                amber_dir: path.join(__dirname, "bower_components", "amber"),
                configFile: "config.js"
            },
            axon: {
                src: [
                    'src/Axon.st',  // list all sources in dependency order
                    // list all tests in dependency order
                ],
                amd_namespace: 'axon',
                libraries: ['amber_core/SUnit']
            },
            all: {
                src: [
                    'src/Trapped-Backend.st', 'src/Trapped-Frontend.st', 'src/Trapped-Processors.st', // list all sources in dependency order
                    'src/Trapped-Tests.st' // list all tests in dependency order
                ],
                amd_namespace: 'trapped',
                libraries: ['axon/Axon', 'amber_core/SUnit', 'amber/web/Web']
            },
            counter: {
                src: [
                    'example-counter/src/Trapped-Counter.st'
                ],
                amd_namespace: 'trapped-counter',
                libraries: ['amber_core/SUnit', 'amber/web/Web', 'trapped/Trapped-Backend']
            },
            todo: {
                src: [
                    'example-todo/src/Trapped-Todo.st'
                ],
                amd_namespace: 'trapped-todo',
                libraries: ['amber_core/SUnit', 'amber/web/Web', 'trapped/Trapped-Frontend', 'trapped/Trapped-Backend']
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            options: {
                useStrict: true
            },
            deploy: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "amber/Platform": '/*stub*/',
                        "app": 'define(["deploy"],function(x){return x});define("amber/Platform",["amber_core/Platform-Browser"],{});'
                    },
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['config', 'node_modules/requirejs/require', 'app'],
                    out: "the.js"
                }
            },
            devel: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "amber/Platform": '/*stub*/',
                        "app": 'define(["devel"],function(x){return x});define("amber/Platform",["amber_core/Platform-Browser"],{});'
                    },
                    include: ['config', 'node_modules/requirejs/require', 'app'],
                    exclude: ['devel'],
                    out: "the.js"
                }
            },
            test_runner: {
                options: {
                    mainConfigFile: "config.js",
                    rawText: {
                        "app": "(" + function () {
                            define(["testing", "amber_devkit/NodeTestRunner"], function (amber) {
                                amber.initialize();
                                amber.globals.NodeTestRunner._main();
                            });
                        } + "());"
                    },
                    paths: {"amber_devkit": helpers.libPath},
                    pragmas: {
                        excludeIdeData: true
                    },
                    include: ['config-node', 'app'],
                    insertRequire: ['app'],
                    optimize: "none",
                    wrap: helpers.nodeWrapperWithShebang,
                    out: "test_runner.js"
                }
            }
        },

        execute: {
            test_runner: {
                src: ['test_runner.js']
            }
        },

        clean: {
            test_runner: ['test_runner.js']
        }
    });

};
