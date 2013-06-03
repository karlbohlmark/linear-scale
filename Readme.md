
# linear-scale

  Linear scale component

## Installation

    $ component install karlbohlmark/linear-scale

## API
	
	var Scale = require('linear-scale')

	var scale = new Scale([0, 1], [0, 100])

	scale.map(10) // -> 100
  scale.invert(100) // -> 10

## License

  MIT
