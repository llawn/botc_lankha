.PHONY: all build serve clean help

HUGO ?= hugo
BUILDDIR ?= public

help:
	@echo "Usage:"
	@echo "  make build     - Build the site with Hugo"
	@echo "  make serve     - Start Hugo development server"
	@echo "  make clean     - Remove build output"

all: build

build:
	$(HUGO) --cleanDestinationDir

serve:
	$(HUGO) server -D

clean:
	rm -rf $(BUILDDIR)
