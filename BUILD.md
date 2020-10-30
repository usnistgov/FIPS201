# Build Instructions

This document source is formatted with Markdown and uses Docker to enable building the final document in both HTML and PDF formats.

To build the HTML website and run a local server, use the command:

~~~
docker-compose up
~~~

This will start a local Jekyll server which will be available on <http://localhost:4000/FIPS201/>.

To build the PDF document, use the command:

~~~
docker-compose -f docker-compose-pdf.yml up
~~~

This will build a PDF file found in `_pdf/FIPS201/FIPS201.pdf`.

The source of the document is separated into three parts, each in a different source directory:

* `_Frontmatter` contains the abstract, foreword, and announcement letter.
* `_FIPS201` contains all seven sections of the core document text.
* `_Appendix` contains the appendices including the glossary, references, and table of revisions.

Within these directories, each section of the document has its own source file.
