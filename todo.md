
# input:
* supported scalars and directives of dgraph
* current schema
* modified schema

# process:
* compare schemas, upload new one if neccessary
* on request, process custom directives and pass request without directives to dgraph 