# Stub

1. start mountebank
    ```shell
    mb start --configfile iWorkflow.json
    ```

2. install newman
    ```shell
    sudo npm install newman -g   
    ```

3. run newman 
    ```shell
    newman run [file_collection_postman]  
    ```

4. ถ้ามี variables global ใน postman จะต้อง export มาใน โฟลเดอร์งาน
    ```shell
    newman run -e [file_variables] [file_collection_postman]  
    ```