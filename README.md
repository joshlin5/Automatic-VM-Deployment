

Notes

```
Warning: fsck not present, so skipping root file system
[    2.434268] EXT4-fs (vda): bad geometry: block count 354304 exceeds size of device (127918 blocks)
mount: mounting /dev/vda on /root failed: Invalid argument
```

Need to resize raw image.

1. Download stuff.
2. resize image.
3. mount, but can't because... ext4.



```
brew install --cask macfuse
curl -s -o ext4fuse.rb https://gist.githubusercontent.com/n-stone/413e407c8fd73683e7e926e10e27dd4e/raw/12b463eb0be3421bdda5db8ef967bfafbaa915c5/ext4fuse.rb
brew install --formula --build-from-source ./ext4fuse.rb
rm ./ext4fuse.rb
```

> To do this, shut down your system. Then press and hold the Touch ID or power button to launch Startup Security Utility. In Startup Security Utility, enable kernel extensions from the Security Policy button.

But ext4fuse is read-only, so can't edit filesystem...

extfs is $39.xx.

4. use cloud-init or build iso with slim.



https://www.thegeekdiary.com/how-to-create-sparse-files-in-linux-using-dd-command/
