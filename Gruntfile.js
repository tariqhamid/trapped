'use strict';

module.exports = function (grunt) {
    var path = require('path');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('amber-dev');

    // Default task.
    grunt.registerTask('default', ['amberc:all', 'amberc:counter', 'amberc:todo']);
    grunt.registerTask('test', ['amberc:test_runner', 'execute:test_runner', 'clean:test_runner']);
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
                library_dirs: ['src'],
                closure_jar: ''
            },
            all: {
                src: [
                    'src/Trapped-Backend.st', 'src/Trapped-Frontend.st', 'src/Trapped-Processors.st', // list all sources in dependency order
                    'src/Trapped-Tests.st' // list all tests in dependency order
                ],
                amd_namespace: 'trapped',
                libraries: ['SUnit', 'Web']
            },
            counter: {
                src: [
                    'example-counter/src/Trapped-Counter.st'
                ],
                amd_namespace: 'trapped-counter',
                libraries: ['SUnit', 'Web', 'Trapped-Backend']
            },
            todo: {
                src: [
                    'example-todo/src/Trapped-Todo.st'
                ],
                amd_namespace: 'trapped-todo',
                libraries: ['SUnit', 'Web', 'Trapped-Frontend', 'Trapped-Backend']
            },
            test_runner: {
                src: ['node_modules/amber-dev/lib/Test.st'],
                libraries: [
                    /* add dependencies packages here */
                    'Trapped', /* add other code-to-test packages here */
                    'SUnit',
                    'Trapped-Tests' /* add other test packages here */
                ],
                main_class: 'NodeTestRunner',
                output_name: 'test_runner'
            }
        },

        amdconfig: {app: {dest: 'config.js'}},

        requirejs: {
            deploy: {
                options: {
                    mainConfigFile: "config.js",
                    onBuildWrite: function (moduleName, path, contents) {
                        return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'deploy'}}});" : contents;
                    },
                    pragmas: {
                        excludeIdeData: true,
                        excludeDebugContexts: true
                    },
                    include: ['config', 'node_modules/requirejs/require', 'deploy'],
                    out: "the.js"
                }
            },
            devel: {
                options: {
                    mainConfigFile: "config.js",
                    onBuildWrite: function (moduleName, path, contents) {
                        return moduleName === "config" ? contents + "\nrequire.config({map:{'*':{app:'devel'}}});" : contents;
                    },
                    include: ['config', 'node_modules/requirejs/require'],
                    out: "the.js"
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