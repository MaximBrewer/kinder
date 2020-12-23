<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    /**
     * Scope a query to only include popular users.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected $perPage = 100;

    protected $fillable = [
        'name_id', 'age', 'pic', 'video', 'sent', 'achieve_id', 'hobby_id', 'from_id', 'email', 'gift_id', 'photo', 'hash', 'news', 'email_hash', 'status'
    ];

    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }

    public function name()
    {
        return $this->belongsTo('App\Models\Name');
    }

    public function achieve()
    {
        return $this->belongsTo('App\Models\Achieve');
    }

    public function hobby()
    {
        return $this->belongsTo('App\Models\Hobby');
    }

    public function from()
    {
        return $this->belongsTo('App\Models\From');
    }

    public function gift()
    {
        return $this->belongsTo('App\Models\Gift');
    }
}
