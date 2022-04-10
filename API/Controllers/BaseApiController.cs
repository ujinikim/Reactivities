using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection; 

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;

        // available to derived classes of BaseApiController
        // ??= if variable is null then assign one after the operator ??=
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices
        .GetService<IMediator>();
        
    }
}