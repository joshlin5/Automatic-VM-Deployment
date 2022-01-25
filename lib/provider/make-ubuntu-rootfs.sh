#!/usr/bin/env bash

# exit on failure
set -e

# Prepare temporary folder and set working directory
rm -rf ../../images/mount-tmp
mkdir -p ../../images/mount-tmp
cd ../../images

# Create raw disk
# echo "Resizing disk sized 512M"
# #dd if=/dev/zero of=rootfs.img seek=512 obs=1m count=0
# dd if=/dev/zero of=rootfs.img seek=20000000 obs=1024 count=0

# Mount raw disk onto mount-tmp
# We can't do this, mac os doesn't like ext4
#OUTPUT=$(hdiutil attach -imagekey diskimage-class=CRawDiskImage rootfs.img -mountpoint mount-tmp)
#echo $OUTPUT
#read DISK MOUNT <<< $( echo "$OUTPUT")

ext4fuse rootfs.img mount-tmp

# No login
chmod +w mount-tmp/etc/shadow
sudo sed 's/ubuntu:!/ubuntu:*/' mount-tmp/etc/shadow
chmod -w mount-tmp/etc/shadow

# Our customization
# cat <<EOF > mount-tmp/etc/netplan/01-dhcp.yaml
# network:
#   ethernets:
#     enp0s1:
#       dhcp4: true
#   version: 2
# EOF

# Mount rootfs on boot.
#echo "LABEL=V-ROOTFS	/	 vfat	discard,errors=remount-ro	0 1" >> mount-tmp/etc/fstab

# Cleanup
umount mount-tmp



