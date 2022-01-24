#!/usr/bin/env bash

# exit on failure
set -e

echo "Creating disk sized $1M"
dd if=/dev/zero of=rootfs.img bs=1m count=$1
mkfs.vfat rootfs.img -n V-ROOTFS

mkdir -p mount-tmp

OUTPUT=$(hdiutil attach -imagekey diskimage-class=CRawDiskImage rootfs.img -mountpoint mount-tmp)
echo $OUTPUT
read DISK MOUNT <<< $( echo "$OUTPUT")
# Copy extracted rootfs into mounted image
echo "Copying rootfs"
tar -xf alpine-minirootfs-3.15.0-aarch64.tar.gz -C mount-tmp

# Mount rootfs on boot.
echo "LABEL=V-ROOTFS	/	 vfat	discard,errors=remount-ro	0 1" >> mount-tmp/etc/fstab


# Cleanup
hdiutil detach $DISK
