using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using WitchSaga.Models;
using WitchSaga.Service;

namespace WitchSaga.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpPost]
    public IActionResult CalculateDeath([FromBody] Person[] personsData)
    {
        var curseSolver = new WitchCurseMath();
        var deadCountSum = personsData.Sum(o => curseSolver.CalculateDeadCountByPerson(o));

        decimal averageDeadCount = deadCountSum / (decimal)personsData.Length;

        return Json(new { averageDeadCount });
    }
}
