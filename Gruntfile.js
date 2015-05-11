module.exports = function (grunt) {

  grunt.initConfig({
    pdflatex: {
      document: "document.tex",
    },
    bibtex: {
      document: "document.aux",
    },
    wordcount: {
      document: "document.tex",
    },
    hunspell: {
      document: {
        options: {
          args: {
            "-p": ".personal-dictionary"
          }
        },
        files: [{ src: "**/*.tex" }]
      }
    },
    watch: {
      src: {
        files: ["**/*.tex", "bibliography.bib", ".personal-dictionary"],
        tasks: ["build"]
      }
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("build", ["pdflatex", "bibtex", "pdflatex", "pdflatex", "hunspell", "wordcount"]);
  grunt.registerTask("default", ["build", "watch"]);

};