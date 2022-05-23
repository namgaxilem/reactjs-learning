#!/bin/sh

sed "s/{{REACT_APP_CATALOG_URL}}/$REACT_APP_CATALOG_URL/g" index.tpl.html > index.html