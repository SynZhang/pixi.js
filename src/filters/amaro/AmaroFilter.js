var core = require('../../core');
var fs = require('fs');

function AmaroFilter(texture)
{
    core.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fs.readFileSync(__dirname + '/amaro.frag', 'utf8'),
        // custom uniforms
        {
           uTexture: { type: 'sampler2D', value: texture }
        }
    );
}

AmaroFilter.prototype = Object.create(core.AbstractFilter.prototype);
AmaroFilter.prototype.constructor = AmaroFilter;
module.exports = AmaroFilter;

Object.defineProperties(AmaroFilter.prototype, {
    mask: {
        get: function ()
        {
            return this.uniforms.uTexture.value;
        },
        set: function (value)
        {
            this.uniforms.uTexture.value = value;
        }
    }
});
