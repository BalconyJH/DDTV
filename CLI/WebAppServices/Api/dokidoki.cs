﻿using CLI.WebAppServices.Middleware;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;
using static CLI.WebAppServices.Middleware.InterfaceAuthentication;

namespace CLI.WebAppServices.Api
{
    [Produces(MediaTypeNames.Application.Json)]
    [ApiController]
    [Route("api/[controller]")]
    [Login]
    public class dokidoki : ControllerBase
    {
        /// <summary>
        /// 请求当前运行心跳信息
        /// </summary>
        /// <param name="commonParameters"></param>
        /// <returns></returns>
        [HttpPost(Name = "dokidoki")]
        public ActionResult Post(PostCommonParameters commonParameters)
        {
            return Content(MessageBase.Success(nameof(dokidoki), Core.Tools.DokiDoki.GetDoki()), "application/json");
        }
        /// <summary>
        /// 请求当前运行心跳信息
        /// </summary>
        /// <param name="commonParameters"></param>
        /// <returns></returns>
        [HttpGet(Name = "dokidoki")]
        public ActionResult GET(GetCommonParameters commonParameters)
        {
            return Content(MessageBase.Success(nameof(dokidoki), Core.Tools.DokiDoki.GetDoki()), "application/json");
        }
    }
}