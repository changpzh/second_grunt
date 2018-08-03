module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // concat: {
        //     options: {
        //         // define a string to insert between files in the concatenated output
        //         separator: ';'
        //     },
        //     dist: {
        //         // files needs to be concatenated
        //         src: ['src/**/*.js'],
        //         // location of the concatenated output JS file
        //         dest: 'dist/<%= pkg.name %>.js'
        //     }
        // },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            buildall: {
                options: {
                    mangle: true, //混淆变量名
                    preserveComments: 'all', //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    compress: {
                        drop_console: true
                    },
                    report: "min"
                },
                files: [{
                    expand: true,
                    cwd: 'src',	//in js dirs
                    src: '**/*.js',	//all js files
                    dest: 'dist'	// output to this dir.
                }]
            }
            // dist: {
            // 	files:{
            // 		'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
            // 	}
            // }
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                },
                // "undef": true,
                "unused": true,
                esversion: 6
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        mochaTest: {
            options: {
                timeout: 10000,
                slow: 500
            },
            src: ["test/**/*.js"]
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['jshint', 'uglify', 'mochaTest']);
    grunt.registerTask('test', ['mochaTest']);
};
