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

The source of the document is found in the `_FIPS201` source directory, consisting of three portions:

* The front matter consists of the abstract, foreword, and announcement letter.
* All seven sections of the core document text.
* The appendix contains the the glossary, references, and table of revisions.

Within this directory, each section of the document has its own source file.
