const virtcrud = require('virtcrud');



class VirtualizationFrameworkProvider {

    async up(name, force)
    {
        let vf = virtcrud.getProvider('vf');
        await vf.create(name);
    }

}

module.exports = VirtualizationFrameworkProvider;