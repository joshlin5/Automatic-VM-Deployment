# V 

> A _minimal_ virtualization tool.

Example usage:

```bash
# M1
v up ubuntu-focal-m1/
# Windows/Virtual Box (Cmd.exe)
v up %USERPROFILE/.bakerx/.persist/images/focal
# Mac/Linux/Virtual Box
v up ~/.bakerx/.persist/images/focal

v ssh
```

Essential NodeJS: Promises - <img width="1728" alt="Promise Activity" src="PromiseActivity1.png">
<img width="1728" alt="Promise Activity" src="PromiseActivity2.png">
<img width="1728" alt="Promise Activity" src="PromiseActivity3.png">

## Conceptual Questions

* Why can code be difficult to run on another machine? -  Different machines could have different environments, dependencies, chips, and more. If any one of these are different, the code may not work exactly the same or even at all since the way the code runs depends on those things.
* Explain the concepts of a computing environment. - It is an unified view of code and configuration needed to operate and maintain some code, i.e. an infrastructure.
* Compare full emulation virtualization vs. binary translation - Full emulation runs code to emulate every part of the machine (cpu, memory, disks, hardware) while additionly executing the code you want to run. This makes it almost double the amount of work the machine has to do fully emulate virtualization and is quite slow. Binary translation executes safe or privileged code in an virtual environment and is quite faster than full emulation. Full emulation emulates an entire machine to run code in while binary translation only runs certain code in an virtual environment.
* What are some use cases associated with microvms and unikernels? - Embedded appliances, such as Docker for Mac, Windows Subsystem Linux (WSL) are associated with microvms while Lambda/Optimized ML and FPGAs (Azure) are associated with unikernels.
* In VM workshop, why can't the Virtual Box ip address be pinged from the host (or accessible from the web browser)? We configured the VM to use a NAT network so that the VM could connect to external network. However, the network will appear as a private network inside the VM so that it can't be addressable from the host machine.
* Compare bridged networking with host-only networking. - Bridged networking allows the VM to use the same network as the host so that we can interact with the VM from the host or even other computers on the network. Host-only networking allows for host and VMs to communicate with each other on the host-only network. However, creating a host-only network requires sudo/admin privilenges.
* How does exactly does bakerx access the virtual machine through ssh? - bakerx opens a socket and waits for a sshd daemon to respond. Once the sshd daemon responds, bakerx fowards the ssh connection to the VM's ssh port.
* Explain the difference between the `rootfs` disk image and `initrd` disk image. - The initrd disk image un-gzips the rootfs into the memory system and provides binaries that I can run in the Linux environment. However, rootfs is like the initrd but will contain the real file system that will provide all the things we need.
* What was a new feature, challenge, or interesting learning experience that you encountered while doing the homework or classroom exercises? - It was very interesting learning how to code in nodejs and how to write promises, especially in the VM homework.

[Homework-V Commands Screencast](https://youtu.be/wlsngeN5vWI)
