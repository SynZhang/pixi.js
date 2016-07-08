var core = require('../../core');
var fs = require('fs');

function HudsonFilter(texture)
{
    core.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fs.readFileSync(__dirname + '/hudson.frag', 'utf8'),
        // custom uniforms
        {
           uTexture: { type: 'sampler2D', value: texture }
        }
    );
}

HudsonFilter.prototype = Object.create(core.AbstractFilter.prototype);
HudsonFilter.prototype.constructor = HudsonFilter;
module.exports = HudsonFilter;

Object.defineProperties(HudsonFilter.prototype, {
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
