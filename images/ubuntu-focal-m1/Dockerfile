FROM ubuntu:20.04

# Install kernel with virtio modules needed for para-virtualization.
RUN apt-get update && \
    apt-get install -y linux-virtual

# Needed for setting up devices.
RUN apt install udev kmod -y
# ssh, sudo, and netplan
RUN apt install openssh-server netplan.io sudo -y

# Copy the kernel and initrd to known path easier extraction
RUN cp /boot/vmlinuz-* /vmlinuz
RUN cp /boot/initrd.img-* /initrd

# User customization
RUN groupadd -r ubuntu && useradd -m -r -g ubuntu ubuntu -s /bin/bash
RUN echo "ubuntu ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
RUN echo "ubuntu:ubuntu" | chpasswd

# Create ssh key for login
ARG PUB_KEY="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCo+YRhI2Gjno+5ND+N/pBvvw7Bvji6OEtZgUKvJf8P9rPcUCR8w7DpDPTpLSM4spBqIwoEM1CQRnH8x/Ufvhr51tU/74A4J2MgBEjClI8M5Z8iqYhDWfoRywo/2uB1rrPHICIM716LRFGIDoqnt+leHU4wcfHmHNa8/KqC5tNxd9/VBxeveh0CIu7/Ba3/UVtn6CTY2sGMo0mJk0IjzIsK42TgRL7ZOTQfbo1Td3DpOCdt02xft5xXCk9KuRwwrjdtyZbP8n8xc7/YcRk0pswFViNfEaU5Eb42+DTr0OhCgadGD9ufxJbSh4ty2VmRycQBfj00VqQO2zPNL2u76EfkMEI/TspVansMCheRtt3C5QJQCv0gXntDSunzgIOvbgShc644eIrmV/kh0oLYkW+Fi80zqx/dIdKMc7OpXK/umJb18ao2IBtBoTiNr5cla1XerDwZXJEp6sPJlSja9xNb0yw0PAfxMiKsR/fjymZ5E7dPaYjS3b+LIyxjxL+GSr8ZRL+3aH7lYsdAaQwekesxaMZUSfKDwRWk5UvE81gpCWWkgcTcqxCGuiBCdviBU88yXfDuFodidgYTJ39JM9v3gKuvlJAtRaBbXSJ6YTjanfozlmpaNYImHUPeooY20vlolmXzs2llZI+gM68GZpnml3en80LJYnin26kigWM9WQ== Baker"
RUN mkdir -p /home/ubuntu/.ssh/ && echo $PUB_KEY > /home/ubuntu/.ssh/authorized_keys

# Add networking
COPY 01-dhcp.yaml /etc/netplan/01-dhcp.yaml