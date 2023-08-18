# System Monitoring and Data Insertion - README

## Description
Welcome to the **System Monitoring and Data Insertion** project! This script monitors system metrics such as upload speed, memory usage, and load averages, and inserts this data along with other information into a MongoDB database. It uses Node.js and various built-in modules to achieve this functionality.

## Functionality
The script performs the following tasks:

1. Measures upload speed using the `/sys/class/net/enp5s0/statistics` directory and calculates the upload speed in MB/s.

2. Lists `.plot` files in the specified source directory, excluding temporary `.plot.tmp` files.

3. Gathers system information such as memory usage, load averages, plot count, and calculated upload speed.

4. Connects to a MongoDB database using the provided URL.

5. Inserts a document containing the gathered system information into a collection named "Avcilar" in the database.

## Prerequisites
Ensure that you have MongoDB installed and running, and have the Node.js environment set up.
