var transform = require( 'buble' ).transform;

module.exports = buble;

function buble ( code, options ) {
	return transform( code, options );
}

buble.defaults = {
	accept: [ '.js', '.mjs' ]
};
