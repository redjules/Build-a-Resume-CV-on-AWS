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
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/5788e781-5d2b-4cb1-b8bf-842a90b927b1)

Go to Hosted zones:
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/30c1e3c9-a1c2-44a2-90e1-9531460a3185)

![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/c9492864-b4c0-4e29-823a-b78269068d3e)

We click create record:

we choose record type A and Alias and route traffic toS3
![image](https://github.com/redjules/Build-a-Resume-CV-on-AWS/assets/106017493/256f27cc-0243-43d1-a1f0-153eaa910e52)




