using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace DDTVLiveRecWebServer
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Auxiliary.InfoLog.InfoPrintf("DDTVLiveRecWebServer�����ɹ�����ʼ����11419�˿�", Auxiliary.InfoLog.InfoClass.���ر�Ҫ��ʾ);
            CreateHostBuilder(args).Build().Run();     
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>().UseUrls("http://0.0.0.0:11419");
                });
    }
}