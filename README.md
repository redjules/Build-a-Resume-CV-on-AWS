# Build-a-Resume-CV-on-AWS

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/de92929c-7c90-431b-914b-c0b97be7d1ea)

I use ChatGPT to create a Resumé:

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/021d3448-a00f-4071-96f4-b8619893baf9)

I got 3 different files, HTML, CSS and JS:

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/127bb32e-1fda-4dee-9fb5-691a500b7862)


I created an S3 bucket:

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/2d54ace1-7374-4e55-bed4-e37604567888)

Static web files (hrml, css, js) can run on S3. I select static website hosting:

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/e2457377-90f5-4412-a64e-144c073ee113)

 I created a policy that allows the content of the bucket to be available:
 ![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/34ec3545-f72c-4e41-87bf-dd5aa1e17287)


![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/fb291acd-0ab0-4761-82e7-bb2d52019f07)

Here is the CV:

<img width="1022" alt="Screenshot 2023-11-07 at 22 13 29" src="https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/2a147511-7c45-4cd4-8416-823fd7e66e6e">


![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/e2c8c63c-619a-4eba-b662-9d58a748162f)

we go to Properties and Static website hosting and enable:

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/12ce438a-64e6-4cef-a2c8-85e5a72a542b)

Go to Permissions tab and add a Policy (attached):
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/c7ede639-cabc-474e-853e-4be67841082e)

Upload files:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/3373da49-5b63-4965-a71f-e56e0ed83507)


Now there's a bucket in static website hosting:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/1388674a-62b6-4f95-a3f2-815d71598b1a)

we click it and there you go:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/71755d5f-e99f-4530-b53d-75317a66e5c0)

The problem is that it's not secure.

# Next version with a custom domain name using S3 and Route 53

Go to Route 53 and domains. Find a domain and buy it:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/d8c09ad1-6fec-43e3-8482-00bc65c6d794)

Go to Hosted zones:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/21c5ca74-8fe7-4bef-b67c-f1e650d7e4fd)



We click create record:

we choose record type A and Alias and route traffic toS3
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/81854022-4d96-4d95-bf33-bd0225c4e389)

and when we click on the domain www.anaaws.com and it works:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/49466739-6da8-4cd7-9d86-a0fcd4b5c09a)


# Next version with incorporae CloudFrint and SSL/HTTPS using CloudFront S3, Route 53, ACM

We go to AWS Certificate Manager (ACCM):
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/ea62b4cc-8e05-4896-8788-d6ca2d29d10f)
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/50e41e9e-8d33-4c1f-87e7-5c3660b7cafc)

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/87c4e0a3-e7d3-437d-84a1-b8de97d688f6)

and request:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/5803e736-02e8-4da8-bd7e-3556c5e6f4f6)

we click on Create records in Route 53 and create records
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/cbf2bd7f-86c9-4949-99c5-afe96a273f3a)

we go to CloudFront and click Create a CloudFront distribution:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/22bb20d3-f5ab-45fe-b2da-7065305f701e)

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/fb5eb963-e70a-4f01-8b9d-f84f2187af26)

we leave all attributes default except viewer:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/48a6352b-a8e2-494c-bc78-444c3939c674)

and WAF we click Do not enable security protections:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/b220422b-c7ad-457e-9dfa-29741ee24ece)

Add item and add domain:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/d9e78d45-a18c-44eb-b061-e365b32fdb40)

and add certificate:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/f53247d6-f8f5-45a9-94b2-cb38404d688b)
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/c5e13e30-9c10-4617-a3d8-cccd93175959)
and create distribution
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/0d98fcda-5788-4999-9418-8982b0ccf79b)

and when copying the distribution domain name in a browser it works:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/65726899-1c79-4c96-83e4-39910286397b)


And it's secure this time!!


Now we need to link the website to the original domain name anaaws.com. We go to Route 53, Hosted zones and click the original record and edit it. We change the route traffic to CloudFront distribution:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/b508a931-0bed-43db-a64a-129ef1068548)

Now we are in the right domain with a secure connection:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/ee2f12fd-cde5-4546-89b8-59c8cf6d057a)


