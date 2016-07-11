var core = require('../../core');
var fs = require('fs');

function LookupFilter(texture)
{
    core.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fs.readFileSync(__dirname + '/lookup.frag', 'utf8'),
        // custom uniforms
        {
            intensity: { type: '1f', value: 1.0 },
            uTexture: { type: 'sampler2D', value: texture }
        }
    );
}

LookupFilter.prototype = Object.create(core.AbstractFilter.prototype);
LookupFilter.prototype.constructor = LookupFilter;
module.exports = LookupFilter;

Object.defineProperties(LookupFilter.prototype, {
    intensity: {
        get: function ()
        {
            return this.uniforms.intensity.value;
        },
        set: function (value)
        {
            this.uniforms.intensity.value = value;
        }
    }
});
