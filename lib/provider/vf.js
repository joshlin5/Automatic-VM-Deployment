const virtcrud = require("virtcrud");
const child = require("child_process");


class VirtualizationFrameworkProvider {

    async up(name, force)
    {
        let vf = virtcrud.getProvider('vf');
        let output = await vf.create(name);
    }

    // Ensure no errors, and extract macAddress assigned to VM.
    async _processOutput( output ) {

    // 2022-01-25 13:33:55.362 vftool[5076:264951] +++ Network Mac Address: f2:d8:8f:cb:ee:6a

    }
    
    //  Search the macaddress of our VM in host's dhcpd lease file.
    //  Example entry:
    //  {
	//    ip_address=192.168.64.22
	//    hw_address=1,9a:ff:bf:63:ec:2f
	//    identifier=1,9a:ff:bf:63:ec:2f
	//    lease=0x61f18182
    //  }
    async _macToIP(macAddress) {

        let ip;
        do {
            ip = child.execSync(`cat /var/db/dhcpd_leases | \
                            grep ${macAddress} -B 1 | \
                            cut -d"=" -f2 | \
                            head -1`).toString().trim();
            if (!ip) await new Promise(resolve => setTimeout(resolve, 1000));
        } while (!ip);

        return ip;
    }
}

module.exports = VirtualizationFrameworkProvider;